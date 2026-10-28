import { CATEGORIES } from '../logic'

// Props: value is the selected category and onChange updates the filter in App.
export default function CategoryFilter({ value, onChange }) {
  return <label className="filter-control"><span className="sr-only">Filter expenses by category</span><select data-cy="filter" value={value} onChange={(event) => onChange(event.target.value)}><option>All</option>{CATEGORIES.map((item) => <option key={item}>{item}</option>)}</select><span className="filter-chevron" aria-hidden="true">⌄</span></label>
}
