import Ticket from "@/app/(models)/Tickets";
import { NextResponse } from "next/server";

export async function DELETE( { params }) {
    try {
      const { id } = params;
      console.log(id)
  
      await Ticket.findByIdAndDelete(id);
      return NextResponse.json({ message: "Ticket Deleted" }, { status: 200 });
    } catch (error) {
      console.log(error);
      return NextResponse.json({ message: "Error", error }, { status: 500 });
    }
  }