import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import React, { useState } from "react";

const Filter = ({ changeFilterHandler }) => {
  const categories = [
    { id: "Next JS", label: "Next JS" },
    { id: "Data Science", label: "Data Science" },
    { id: "Frontend Development", label: "Frontend Development" },
    { id: "Fullstack Development", label: "Fullstack Development" },
    { id: "MERN Stack Development", label: "MERN Stack Development" },
    { id: "Backend Development", label: "Backend Development" },
    { id: "Javascript", label: "Javascript" },
    { id: "Python", label: "Python" },
    { id: "Docker", label: "Docker" },
    { id: "MongoDB", label: "MongoDB" },
    { id: "HTML", label: "HTML" },
  ];

  const [selectedCategories, setSelectedCategories] = useState([]);
  const [sortByPrice, setSortByPrice] = useState("");

  const categoryChangeHandler = (categoryId) => {
    setSelectedCategories((previousCategories) => {
      const newCategories = previousCategories.includes(categoryId)
        ? previousCategories.filter((id) => id !== categoryId)
        : [...previousCategories, categoryId];

      changeFilterHandler(newCategories, sortByPrice);
      return newCategories;
    });
  };

  const sortByPriceHandler = (selectedValue) => {
    setSortByPrice(selectedValue);
    changeFilterHandler(selectedCategories, selectedValue);
  };

  return (
    <div className="w-full md:w-[20%]">
      <div className="flex items-center justify-between">
        <h1 className="font-semibold text-lg md:text-xl mr-2">
          Filter options
        </h1>
        <Select onValueChange={sortByPriceHandler}>
          <SelectTrigger>
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Sort by</SelectLabel>
              <SelectItem value="low">Low to High</SelectItem>
              <SelectItem value="high">High to low</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <Separator className="my-4" />
      <div>
        <h1 className="font-semibold mb-2">Category</h1>
        {categories.map((category) => (
          <div key={category.id} className="flex items-center space-x-2 my-2">
            <Checkbox
              id={category.id}
              onCheckedChange={() => categoryChangeHandler(category.id)}
            />
            <Label
              htmlFor={category.id}
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 "
            >
              {category.label}
            </Label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Filter;
