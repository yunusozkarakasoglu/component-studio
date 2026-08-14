/**
 * TaskFilterButton
 * Saf React bileşen (bağımlılıksız) — Özel (kullanıcı) kaynaklı.
 * Görev listesi filtre popover'ı: butona bas → filtre satırları ekle
 * (Durum/Proje/Öncelik/Sorumlu/Kaydeden seçimleri + Tarih Aralığı),
 * satırlar arası VE/VEYA mantık, temizleme. Aktif filtre sayısı buton rozetinde.
 * Yardımcı: applyFilters(tasks, { logic, filters }) — görev dizisini filtreler.
 *   <TaskFilterButton />
 * @id 2084
 * @category Özel Komponentler
 * @subcategory TaskFilterButton
 * @source ozel
 * @tags görev, filtre, popover, durum, öncelik, tarih, ve, veya
 */
import { useEffect, useRef, useState } from "react"
import { Fragment } from "react"
import { Plus, X, ChevronDown, Filter, Trash2 } from "@/components/ui/icons"

/* ---- Sabit veriler (kendi verinle değiştir) ---- */
interface FieldDef {
  label: string
  type: "select" | "date"
  options?: readonly string[]
}

const FIELD_DEFS: Record<string, FieldDef> = {
  status: {
    label: "Durum",
    type: "select",
    options: ["Yapılacak", "Devam Ediyor", "İncelemede", "Tamamlandı"],
  },
  project: {
    label: "Proje",
    type: "select",
    options: ["Web Sitesi", "Mobil Uygulama", "API", "Pazarlama"],
  },
  priority: {
    label: "Öncelik",
    type: "select",
    options: ["Düşük", "Orta", "Yüksek", "Acil"],
  },
  assignee: {
    label: "Sorumlu",
    type: "select",
    options: ["Yunus", "Ayşe", "Mehmet", "Elif"],
  },
  createdBy: {
    label: "Kaydeden",
    type: "select",
    options: ["Yunus", "Ayşe", "Mehmet", "Elif"],
  },
  dateRange: {
    label: "Tarih Aralığı",
    type: "date",
  },
}

const OPERATORS: Record<FieldDef["type"], { value: string; label: string }[]> = {
  select: [
    { value: "is", label: "eşittir" },
    { value: "isNot", label: "eşit değildir" },
  ],
  date: [
    { value: "between", label: "arasında" },
    { value: "before", label: "önce" },
    { value: "after", label: "sonra" },
  ],
}

type FilterValue = string | { from: string; to: string }

interface TaskFilter {
  id: string
  field: string
  operator: string
  value: FilterValue
}

interface TaskFilterButtonProps {
  onFiltersChange?: (payload: { logic: "and" | "or"; filters: TaskFilter[] }) => void
}

let idCounter = 0
const nextId = () => `f_${++idCounter}`

/* ---- Tek bir filtre satırı ---- */
function FilterRow({
  filter,
  onChange,
  onRemove,
}: {
  filter: TaskFilter
  onChange: (updated: TaskFilter) => void
  onRemove: () => void
}) {
  const def = FIELD_DEFS[filter.field]
  const ops = OPERATORS[def.type]

  const updateField = (field: string) => {
    const newDef = FIELD_DEFS[field]
    onChange({
      ...filter,
      field,
      operator: OPERATORS[newDef.type][0].value,
      value: newDef.type === "date" ? { from: "", to: "" } : "",
    })
  }

  return (
    <div className="flex items-center gap-1.5 px-1">
      <select
        value={filter.field}
        onChange={(e) => updateField(e.target.value)}
        className="text-sm bg-neutral-100 hover:bg-neutral-200 rounded-md px-2 py-1 border-none outline-none cursor-pointer text-neutral-800 font-medium"
      >
        {Object.entries(FIELD_DEFS).map(([key, d]) => (
          <option key={key} value={key}>
            {d.label}
          </option>
        ))}
      </select>

      <select
        value={filter.operator}
        onChange={(e) => onChange({ ...filter, operator: e.target.value })}
        className="text-sm bg-transparent hover:bg-neutral-100 rounded-md px-2 py-1 border-none outline-none cursor-pointer text-neutral-500"
      >
        {ops.map((op) => (
          <option key={op.value} value={op.value}>
            {op.label}
          </option>
        ))}
      </select>

      {def.type === "select" && (
        <select
          value={filter.value as string}
          onChange={(e) => onChange({ ...filter, value: e.target.value })}
          className="text-sm bg-transparent hover:bg-neutral-100 rounded-md px-2 py-1 border-none outline-none cursor-pointer text-neutral-800 flex-1 min-w-0"
        >
          <option value="">Seç...</option>
          {(def.options ?? []).map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      )}

      {def.type === "date" && (
        <div className="flex items-center gap-1">
          <input
            type="date"
            value={(filter.value as { from: string; to: string })?.from || ""}
            onChange={(e) =>
              onChange({
                ...filter,
                value: { ...(filter.value as { from: string; to: string }), from: e.target.value },
              })
            }
            className="text-sm bg-transparent hover:bg-neutral-100 rounded-md px-1.5 py-1 border-none outline-none text-neutral-800"
          />
          {filter.operator === "between" && (
            <Fragment>
              <span className="text-neutral-400 text-xs">–</span>
              <input
                type="date"
                value={(filter.value as { from: string; to: string })?.to || ""}
                onChange={(e) =>
                  onChange({
                    ...filter,
                    value: { ...(filter.value as { from: string; to: string }), to: e.target.value },
                  })
                }
                className="text-sm bg-transparent hover:bg-neutral-100 rounded-md px-1.5 py-1 border-none outline-none text-neutral-800"
              />
            </Fragment>
          )}
        </div>
      )}

      <button
        onClick={onRemove}
        className="text-neutral-400 hover:text-red-500 hover:bg-red-50 rounded-md p-1 transition-colors flex-shrink-0"
        aria-label="Filtreyi kaldır"
      >
        <Trash2 className="size-3.5" />
      </button>
    </div>
  )
}

/* ---- AND/OR toggle (satırlar arasına konur) ---- */
function LogicToggle({
  value,
  onChange,
}: {
  value: "and" | "or"
  onChange: (v: "and" | "or") => void
}) {
  return (
    <div className="flex ml-1 my-0.5 bg-neutral-100 rounded-md p-0.5 w-fit text-xs font-medium">
      {(["and", "or"] as const).map((v) => (
        <button
          key={v}
          onClick={() => onChange(v)}
          className={`px-2 py-0.5 rounded transition-colors ${
            value === v
              ? "bg-white text-neutral-900 shadow-sm"
              : "text-neutral-400 hover:text-neutral-600"
          }`}
        >
          {v === "and" ? "VE" : "VEYA"}
        </button>
      ))}
    </div>
  )
}

/* ---- Ana bileşen ---- */
function TaskFilterButton({ onFiltersChange }: TaskFilterButtonProps) {
  const [open, setOpen] = useState(false)
  const [filters, setFilters] = useState<TaskFilter[]>([])
  const [logic, setLogic] = useState<"and" | "or">("and") // filtreler arası tek tip mantık
  const popoverRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (popoverRef.current && !popoverRef.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  useEffect(() => {
    onFiltersChange?.({ logic, filters })
  }, [filters, logic, onFiltersChange])

  const addFilter = () => {
    const usedFields = filters.map((f) => f.field)
    const availableField =
      Object.keys(FIELD_DEFS).find((k) => !usedFields.includes(k)) || "status"
    const def = FIELD_DEFS[availableField]
    setFilters([
      ...filters,
      {
        id: nextId(),
        field: availableField,
        operator: OPERATORS[def.type][0].value,
        value: def.type === "date" ? { from: "", to: "" } : "",
      },
    ])
    setOpen(true)
  }

  const updateFilter = (id: string, updated: TaskFilter) => {
    setFilters(filters.map((f) => (f.id === id ? updated : f)))
  }

  const removeFilter = (id: string) => {
    setFilters(filters.filter((f) => f.id !== id))
  }

  const clearAll = () => setFilters([])

  return (
    <div className="relative inline-block font-sans" ref={popoverRef}>
      <button
        onClick={() => (filters.length === 0 ? addFilter() : setOpen(!open))}
        className={`flex items-center gap-1.5 text-sm px-2.5 py-1.5 rounded-md border transition-colors ${
          filters.length > 0
            ? "bg-blue-50 border-blue-200 text-blue-700"
            : "bg-white border-neutral-200 text-neutral-600 hover:bg-neutral-50"
        }`}
        aria-haspopup="dialog"
        aria-expanded={open}
      >
        <Filter className="size-3.5" />
        {filters.length === 0 ? "Filtre Ekle" : `${filters.length} Filtre`}
        {filters.length > 0 && <ChevronDown className="size-3.5" />}
      </button>

      {open && filters.length > 0 && (
        <div
          role="dialog"
          aria-label="Görev filtreleri"
          className="absolute z-50 mt-1.5 left-0 bg-white border border-neutral-200 rounded-lg shadow-lg py-2 w-[420px]"
        >
          <div className="flex flex-col">
            {filters.map((filter, i) => (
              <Fragment key={filter.id}>
                <FilterRow
                  filter={filter}
                  onChange={(updated) => updateFilter(filter.id, updated)}
                  onRemove={() => removeFilter(filter.id)}
                />
                {i < filters.length - 1 && (
                  <LogicToggle value={logic} onChange={setLogic} />
                )}
              </Fragment>
            ))}
          </div>

          <div className="flex items-center justify-between px-1 mt-2 pt-2 border-t border-neutral-100">
            <button
              onClick={addFilter}
              className="flex items-center gap-1 text-sm text-neutral-500 hover:text-neutral-800 px-2 py-1 rounded-md hover:bg-neutral-100"
            >
              <Plus className="size-3.5" />
              Filtre ekle
            </button>
            <button
              onClick={clearAll}
              className="flex items-center gap-1 text-sm text-neutral-400 hover:text-red-500 px-2 py-1 rounded-md hover:bg-red-50"
            >
              <X className="size-3.5" />
              Temizle
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

/* ---- Verilen filtreleri gerçek görev listesine uygulayan yardımcı fonksiyon ---- */
function applyFilters(
  tasks: Record<string, string>[],
  { logic, filters }: { logic: "and" | "or"; filters: TaskFilter[] },
) {
  if (!filters || filters.length === 0) return tasks

  const matchOne = (task: Record<string, string>, f: TaskFilter) => {
    const def = FIELD_DEFS[f.field]
    if (def.type === "select") {
      const taskVal = task[f.field]
      const target = f.value as string
      if (f.operator === "is") return taskVal === target
      if (f.operator === "isNot") return taskVal !== target
    }
    if (def.type === "date") {
      const taskDate = new Date(task[f.field])
      const dv = f.value as { from: string; to: string }
      const from = dv.from ? new Date(dv.from) : null
      const to = dv.to ? new Date(dv.to) : null
      if (f.operator === "between") return (!from || taskDate >= from) && (!to || taskDate <= to)
      if (f.operator === "before") return from ? taskDate < from : true
      if (f.operator === "after") return from ? taskDate > from : true
    }
    return true
  }

  return tasks.filter((task) =>
    logic === "and"
      ? filters.every((f) => matchOne(task, f))
      : filters.some((f) => matchOne(task, f)),
  )
}

export { TaskFilterButton, applyFilters }
