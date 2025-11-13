import Link from "next/link";
import { BadgeCheck, SlashIcon } from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import CardList from "@/components/CardList";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Button } from "@/components/ui/button";

const SingleUserPage = () => {
  return (
    <div>
      Single User Page
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href="/">Dashboard</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator>{/* <SlashIcon /> */}</BreadcrumbSeparator>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href="/users">Users</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator>{/* <SlashIcon /> */}</BreadcrumbSeparator>
          <BreadcrumbItem>
            <BreadcrumbPage>Jone Doe</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      {/* Container */}
      <div className="mt-4 flex flex-col xl:flex-row gap-8">
        {/* LEFT */}
        <div className="w-full xl:w-1/3 space-y-6">
          {/* Users badge container */}
          <div className="bg-primary-foreground p-4 rounded-lg">
            <h1 className="text-xl font-semibold">User Badges</h1>
            <div className="flex gap-4 mt-4">
              <HoverCard>
                <HoverCardTrigger>
                  
                  
                  <BadgeCheck size={38} className="rounded-full bg-blue-500/50 border border-blue-500/90 p-1 cursor-pointer" />
                </HoverCardTrigger>
                <HoverCardContent>
                                  <h1 className="font-bold mb-2">Verified User</h1>
                                  <p></p>
                </HoverCardContent>
              </HoverCard>
            </div>
          </div>
          {/* Information badge container */}
          <div className="bg-primary-foreground p-4 rounded-lg">Badge</div>
          {/* Card list container */}
          <div className="bg-primary-foreground p-4 rounded-lg">
            <CardList title="Recent Transfer" />
          </div>
        </div>
        {/* RIGHT */}
        <div className="w-full xl:w-2/3 space-y-6">
          {" "}
          {/* Users Card container */}
          <div className="bg-primary-foreground p-4 rounded-lg">User Card</div>
          {/* Chart container */}
          <div className="bg-primary-foreground p-4 rounded-lg">Chart</div>
        </div>
      </div>
    </div>
  );
};

export default SingleUserPage;
