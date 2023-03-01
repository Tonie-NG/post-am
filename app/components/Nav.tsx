import Link from "next/link";
import React from "react";
// import {Roboto} from "@next/font/google";

export default async function Nav() {
  return (
    <nav>
      <Link href={"/"}>Send it </Link>
    </nav>
  );
}
