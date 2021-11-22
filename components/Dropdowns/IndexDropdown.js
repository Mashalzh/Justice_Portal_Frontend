import React from "react";
import Link from "next/link";
import { createPopper } from "@popperjs/core";

const IndexDropdown = () => {
  // dropdown props
  const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false);
  const btnDropdownRef = React.createRef();
  const popoverDropdownRef = React.createRef();
  const openDropdownPopover = () => {
    createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
      placement: "bottom-start",
    });
    setDropdownPopoverShow(true);
  };
  const closeDropdownPopover = () => {
    setDropdownPopoverShow(false);
  };
  return (
    <>
      <a
        className="hover:text-blueGray-500 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
        href="#pablo"
        ref={btnDropdownRef}
        onClick={(e) => {
          e.preventDefault();
          dropdownPopoverShow ? closeDropdownPopover() : openDropdownPopover();
        }}
      >
        Services
      </a>
      <div
        ref={popoverDropdownRef}
        className={
          (dropdownPopoverShow ? "block " : "hidden ") +
          "bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-48"
        }
      >
        <span
          className={
            "text-sm pt-2 pb-0 px-4 font-bold block w-full whitespace-nowrap bg-transparent text-blueGray-400"
          }
        >
          Property
        </span>
        <Link href="">
          <a
            href="#pablo"
            className={
              "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
            }
          >
            Property Product
          </a>
        </Link>
        <Link href="">
          <a
            href="#pablo"
            className={
              "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
            }
          >
            Document Review
          </a>
        </Link>
        <Link href="">
          <a
            href="#pablo"
            className={
              "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
            }
          >
            Estate Planning
          </a>
        </Link>
        <div className="h-0 mx-4 my-2 border border-solid border-blueGray-100" />
        <span
          className={
            "text-sm pt-2 pb-0 px-4 font-bold block w-full whitespace-nowrap bg-transparent text-blueGray-400"
          }
        >
          Document
        </span>
        <Link href="">
          <a
            href="#pablo"
            className={
              "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
            }
          >
            Document Review and Consult
          </a>
        </Link>
        <Link href="">
          <a
            href="#pablo"
            className={
              "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
            }
          >
            Fund Raising Document
          </a>
        </Link>
        <Link href="">
          <a
            href="#pablo"
            className={
              "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
            }
          >
            Startup Document
          </a>
        </Link>
        <Link href="">
          <a
            href="#pablo"
            className={
              "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
            }
          >
            Agreements $ Contracts
          </a>
        </Link>
        <div className="h-0 mx-4 my-2 border border-solid border-blueGray-100" />
        <span
          className={
            "text-sm pt-2 pb-0 px-4 font-bold block w-full whitespace-nowrap bg-transparent text-blueGray-400"
          }
        >
          Startup
        </span>
        <Link href="/landing">
          <a
            href="#pablo"
            className={
              "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
            }
          >
            Company Formation
          </a>
        </Link>
        <Link href="/profile">
          <a
            href="#pablo"
            className={
              "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
            }
          >
            Intellectual Property
          </a>
        </Link>
        <Link href="/profile">
          <a
            href="#pablo"
            className={
              "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
            }
          >
            Legal Consultation
          </a>
        </Link>
      </div>
    </>
  );
};

export default IndexDropdown;
