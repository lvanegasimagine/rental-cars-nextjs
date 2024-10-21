import React from "react";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Trash } from "lucide-react";
import { FiltersCarsProps } from "./FiltersCar.types";
import { Button } from "@/components/ui/button";

export function FiltersCar({
    filters,
    setFilters,
    clearFilters,
}: FiltersCarsProps) {
    const handleFilter = (filter: string, value: string) => {
        setFilters(filter, value);
    };
    return (
        <div className="mb-8 mt-5 flex flex-col gap-x-4 space-y-2 md:flex-row md:space-y-0 md:gap-5">
            <Select
                onValueChange={(value) => handleFilter("type", value)}
                value={filters.type}
            >
                <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Tipo de Vehiculo" />
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                        <SelectLabel>Tipo de Vehiculo</SelectLabel>
                        <SelectItem value="sedan">Sedan</SelectItem>
                        <SelectItem value="suv">Suv</SelectItem>
                        <SelectItem value="coupe">Coupe</SelectItem>
                        <SelectItem value="familiar">Familiar</SelectItem>
                        <SelectItem value="luxe">De Luxe</SelectItem>
                    </SelectGroup>
                </SelectContent>
            </Select>

            <Select
                onValueChange={(value) => handleFilter("transmission", value)}
                value={filters.transmission}
            >
                <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Cambio de marchas" />
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                        <SelectLabel>Cambio de marchas</SelectLabel>
                        <SelectItem value="manual">Manual</SelectItem>
                        <SelectItem value="automatic">Automatico</SelectItem>
                    </SelectGroup>
                </SelectContent>
            </Select>

            <Select
                onValueChange={(value) => handleFilter("engine", value)}
                value={filters.engine}
            >
                <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="tipo de motor" />
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                        <SelectLabel>Tipo de motor</SelectLabel>
                        <SelectItem value="gasoil">Gasolina</SelectItem>
                        <SelectItem value="diesel">Diesel</SelectItem>
                        <SelectItem value="electric">Electrico</SelectItem>
                        <SelectItem value="hybrid">Hibrido</SelectItem>
                    </SelectGroup>
                </SelectContent>
            </Select>

            <Select
                onValueChange={(value) => handleFilter("people", value)}
                value={filters.people}
            >
                <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Personas" />
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                        <SelectLabel>Personas</SelectLabel>
                        <SelectItem value="2">2</SelectItem>
                        <SelectItem value="4">4</SelectItem>
                        <SelectItem value="5">5</SelectItem>
                        <SelectItem value="7">7</SelectItem>
                    </SelectGroup>
                </SelectContent>
            </Select>
            <Button onClick={clearFilters} variant="destructive">
                Remove Filters <Trash className="ml-2 h-4 w-4" />
            </Button>
        </div>
    );
}
