"use client";
import React from "react";
import { ScrollArea } from "./ui/scroll-area";
import { Checkbox } from "./ui/checkbox";
import { Label } from "recharts";
import { Card } from "./ui/card";
import { Calendar } from "./ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Button } from "./ui/button";
import { Calendar1Icon } from "lucide-react";
import { format } from "date-fns";

const TodoList = () => {
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  const [open, setOpen] = React.useState(false);

  return (
    <div>
      <h1 className="text-lg font-medium mb-6">Todo List</h1>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button variant="default" className=" w-full">
            <Calendar1Icon />
            {date ? format(date, "PPP") : <span>Pick date</span>}
          </Button>
        </PopoverTrigger>
        <PopoverContent>
          <Calendar
            mode="single"
            selected={date}
            onSelect={(date) => {
              setDate(date);
              setOpen(false);
            }}
            // className="rounded-md border shadow-sm"
            captionLayout="dropdown"
          />
        </PopoverContent>
      </Popover>
      {/* LIST */}
      <ScrollArea className="h-[400px] overflow-y-auto mt-6 gap-2">
        {/* List Item  */}
        <div className="flex flex-col gap-4">
          <Card className="flex p-2">
            <div className="flex items-center gap-3">
              <Checkbox id="item1" />
              <label
                htmlFor="item1"
                className="text-sm font-medium text-muted-foreground"
              >
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias,
                impedit.
              </label>
              {/* <Label >Accept terms and conditions</Label> */}
            </div>
          </Card>
          <Card className="flex p-2">
            <div className="flex items-center gap-3">
              <Checkbox id="item2" />
              <label
                htmlFor="item2"
                className="text-sm font-medium text-muted-foreground"
              >
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias,
                impedit.
              </label>
              {/* <Label >Accept terms and conditions</Label> */}
            </div>
          </Card>
          <Card className="flex p-2">
            <div className="flex items-center gap-3">
              <Checkbox id="item3" />
              <label
                htmlFor="item3"
                className="text-sm font-medium text-muted-foreground"
              >
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias,
                impedit.
              </label>
              {/* <Label >Accept terms and conditions</Label> */}
            </div>
          </Card>
          <Card className="flex p-2">
            <div className="flex items-center gap-3">
              <Checkbox id="item4" />
              <label
                htmlFor="item4"
                className="text-sm font-medium text-muted-foreground"
              >
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias,
                impedit.
              </label>
              {/* <Label >Accept terms and conditions</Label> */}
            </div>
          </Card>
          <Card className="flex p-2">
            <div className="flex items-center gap-3">
              <Checkbox id="item5" />
              <label
                htmlFor="item5"
                className="text-sm font-medium text-muted-foreground"
              >
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias,
                impedit.
              </label>
              {/* <Label >Accept terms and conditions</Label> */}
            </div>
          </Card>
          <Card className="flex p-2">
            <div className="flex items-center gap-3">
              <Checkbox id="item6" />
              <label
                htmlFor="item6"
                className="text-sm font-medium text-muted-foreground"
              >
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias,
                impedit.
              </label>
              {/* <Label >Accept terms and conditions</Label> */}
            </div>
          </Card>
          <Card className="flex p-2">
            <div className="flex items-center gap-3">
              <Checkbox id="item7" />
              <label
                htmlFor="item7"
                className="text-sm font-medium text-muted-foreground"
              >
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias,
                impedit.
              </label>
              {/* <Label >Accept terms and conditions</Label> */}
            </div>
          </Card>
          <Card className="flex p-2">
            <div className="flex items-center gap-3">
              <Checkbox id="item8" />
              <label
                htmlFor="item8"
                className="text-sm font-medium text-muted-foreground"
              >
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias,
                impedit.
              </label>
              {/* <Label >Accept terms and conditions</Label> */}
            </div>
          </Card>
          <Card className="flex p-2">
            <div className="flex items-center gap-3">
              <Checkbox id="item9" />
              <label
                htmlFor="item9"
                className="text-sm font-medium text-muted-foreground"
              >
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias,
                impedit.
              </label>
              {/* <Label >Accept terms and conditions</Label> */}
            </div>
          </Card>
        </div>
      </ScrollArea>
    </div>
  );
};

export default TodoList;
