import { useState } from "react";
import { myWorkActivities, actionRequired, activitiesTabs, activitiesFilters } from "../data/ActivitiesData";
import DynamicPageLayout from "../components/layout/DynamicPageLayout";
import CardListSection from "../components/common/cards/CardListSection";

export default function ActivitiesPage() {
    const [activeTab1, setActiveTab1] = useState("today");
    const [activeTab2, setActiveTab2] = useState("required");

    return (
        <DynamicPageLayout
            tabs={activitiesTabs}
            filtersConfig={activitiesFilters}
            type="card"
            showSearch={false}
            showImport={false}
            showHelp={false}
        >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                <CardListSection
                    title="My Work Activities"
                    tabs={[
                        { key: "today", label: "Today", count: 5 },
                        { key: "overdue", label: "Overdue", count: 9 },
                        { key: "upcoming", label: "Upcoming", count: 87 },
                    ]}
                    selectedTab={activeTab1}
                    onTabChange={setActiveTab1}
                    filters={[]}
                    data={myWorkActivities}
                />

                <CardListSection
                    title="Action Required"
                    tabs={[
                        { key: "me", label: "Action Required By Me", count: 5 },
                        { key: "approval", label: "My Pending Approvals", count: 9 },
                    ]}
                    selectedTab={activeTab2}
                    onTabChange={setActiveTab2}
                    filters={[]}
                    data={actionRequired}
                />
            </div>
        </DynamicPageLayout>
    );
}
