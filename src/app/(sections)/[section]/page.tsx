import { redirect } from "next/navigation";
import React from "react";

const VALID = new Set(["home", "about", "services", "projects", "process", "contact"]);

export default async function SectionPage({ params }: { params: Promise<{ section: string }> }): Promise<React.JSX.Element> {
  const { section } = await params;
  if (VALID.has(section)) {
    redirect(`/#${section}`);
  }
  redirect("/");
}


