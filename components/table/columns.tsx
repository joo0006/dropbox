"use client";

import { COLOR_EXTENSION_MAP } from "@/constant";
import { Filetype } from "@/typings";
import { ColumnDef } from "@tanstack/react-table";
import prettyBytes from "pretty-bytes";
import { FileIcon, defaultStyles } from "react-file-icon";

export const columns: ColumnDef<Filetype>[] = [
{
    accessorKey: "type",
    header: "Type",
    cell: ({ renderValue, ...props }) => {
        const type = renderValue() as string;
        const extension: string  = type.split("/")[1];
    return (
        <div className="w-10">
        <FileIcon
            extension={extension}
            labelColor={COLOR_EXTENSION_MAP[extension]}
            //@ts-ignore
            {...defaultStyles[extension]} 
        />
</div>
);
},
},
    {
    accessorKey: "filename",
    header: "Filename",
},
{
    accessorKey: "timestamp",
    header: "Date Added",
},
{
    accessorKey:"size",
    header:"Size",
    cell: ({renderValue, ...props}) => {
        return <span>{prettyBytes(renderValue() as number)}</span>
    },
},
];
