import AppBarCharts from "@/components/AppBarCharts";
import AppPieCharts from "@/components/AppPieCharts";
import CardList from "@/components/CardList";
import { ChartAreaGradient } from "@/components/ChartAreaGradient";
import TodoList from "@/components/TodoList";

export default function Home() {
  return (
    <div className="grid grid-cols-1  lg:grid-cols-2 2xl:grid-cols-4 gap-4">
      <div className="bg-primary-foreground p-4 rounded-lg lg:col-span-2 xl:col-span-1 2xl:col-span-2">
        <AppBarCharts />
      </div>
      <div className="bg-primary-foreground p-4 rounded-lg">
        <ChartAreaGradient />
      </div>
      <div className="bg-primary-foreground p-4 rounded-lg">
        <AppPieCharts />
      </div>
      <div className="bg-primary-foreground p-4 rounded-lg">
        <TodoList />
      </div>
      <div className="bg-primary-foreground p-4 rounded-lg lg:col-span-2 xl:col-span-1 2xl:col-span-2">
        <CardList title="Popular Content" />
      </div>
      <div className="bg-primary-foreground p-4 rounded-lg">
        {" "}
        <CardList title="Latest Transactions" />
      </div>
    </div>
  );
}
