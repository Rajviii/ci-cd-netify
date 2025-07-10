import DynamicPageLayout from "../components/layout/DynamicPageLayout";
import { jobsTableData, jobsColumns, jobsTabs, jobsFilters } from "../data/JobsData";

export default function JobsPage() {
  return (
    <DynamicPageLayout
      tabs={jobsTabs}
      columns={jobsColumns}
      data={jobsTableData}
      filtersConfig={jobsFilters}
      type="table"
    />
  );
}
