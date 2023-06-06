"use client";

import Image from "next/image";
import { PolygonBox } from "./PolygonBox";

export function Profile() {
  return (
    <PolygonBox size={"lg"} border={"silver"}>
      <img
        src="/images/Profile.png"
        alt=""
        className="w-[187.35px] h-[226.9px] md:w-[324px] md:h-[392.39px]"
      />
    </PolygonBox>
  );
}
