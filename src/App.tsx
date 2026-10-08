import { useState } from "react";
import { AddItemDialog } from "./components/AddItemDialog";
import { ItemList } from "./components/ItemList";
import { Footer } from "./components/Footer";
import { OverviewCards } from "./components/OverviewCards";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CategoryCards } from "./components/CategoryCards";
import { ListEnd, LayoutGrid } from "lucide-react";

export default function App() {
  const [mode, setMode] = useState<"OverviewCards" | "CategoryCards">(
    "OverviewCards",
  );
  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      {/* Main Content Area */}
      <main className="flex-1 p-6 md:p-10">
        <div className="max-w-5xl mx-auto space-y-8">
          {/* Header Layout wrapper */}
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">
                Expenditure Dashboard
              </h1>
              <p className="text-muted-foreground">
                Track your everyday expenses and budget easily.
              </p>
            </div>
            <AddItemDialog />
          </div>

          {/* Put OverviewCards and CategoryCards under DashboardTabs */}
          {/* And then use DashboardTabs here instead */}
          <Tabs
            value={mode}
            onValueChange={(v) =>
              setMode(v as "OverviewCards" | "CategoryCards")
            }
          >
            <TabsList>
              <TabsTrigger value="OverviewCards">
                {" "}
                <ListEnd style={{ transform: "scaleX(-1)" }} /> 
                <span className="text-lg"> Overview </span>
                {" "}
              </TabsTrigger>
              <TabsTrigger value="CategoryCards">
                {" "}
                <LayoutGrid /> 
                <span className="text-lg"> By Category </span>
                {" "}
              </TabsTrigger>
            </TabsList>
            <TabsContent value="OverviewCards" className="pt-2">
              <OverviewCards />
            </TabsContent>
            <TabsContent value="CategoryCards" className="pt-2">
              <CategoryCards />
            </TabsContent>
          </Tabs>

          <ItemList />
        </div>
      </main>

      {/* Footer stays at the very bottom of the viewport if content is short */}
      <Footer />
    </div>
  );
}
