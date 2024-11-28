'use client'
import { UserButton } from "@clerk/nextjs";
import { ChartNoAxesGantt } from "lucide-react";
import React from "react";

const UserMenu = () => {
  return (
    <>
      <UserButton
        appearance={{
          elements: {
            avatarBox: "w-10h-10",
          },
        }}
      >
        <UserButton.MenuItems>
          <UserButton.Link
            label="My-event"
            labelIcon={<ChartNoAxesGantt size={15} />}
            href="/events"
          ></UserButton.Link>
          <UserButton.Action label="manageAccount"></UserButton.Action>
        </UserButton.MenuItems>
      </UserButton>
    </>
  );
};

export default UserMenu;
