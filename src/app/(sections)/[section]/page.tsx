import { redirect } from "next/navigation";
import React from "react";

const VALID = new Set(["home", "about", "services", "projects", "process", "contact"]);

export default function SectionPage({ params }: { params: { section: string } }): React.JSX.Element {
  const seg = params.section;
  if (VALID.has(seg)) {
    redirect(`/#${seg}`);
  }
  redirect("/");
}


