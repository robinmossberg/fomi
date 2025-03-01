// const Navbar = () => (

// <header class="bg-black/90 text-white">
//   <nav
//     class="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
//     aria-label="Global"
//   >
//     <div class="flex lg:hidden">
//       <button
//         type="button"
//         class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
//       >
//         <span class="sr-only">Open main menu</span>
//         <svg
//           class="size-6"
//           fill="none"
//           viewBox="0 0 24 24"
//           stroke-width="1.5"
//           stroke="currentColor"
//           aria-hidden="true"
//           data-slot="icon"
//         >
//           <path
//             stroke-linecap="round"
//             stroke-linejoin="round"
//             d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
//           />
//         </svg>
//       </button>
//     </div>
//     <div class="hidden lg:flex lg:gap-x-12">
//       <a href="#" class="text-sm/6 font-semibold text-white">
//         sign up
//       </a>
//       <a href="#" class="text-sm/6 font-semibold text-white">
//         about
//       </a>
//       <a href="#" class="text-sm/6 font-semibold text-white">
//         the good habits club
//       </a>
//       <a href="#" class="text-sm/6 font-semibold text-white">
//         login
//       </a>
//     </div>
//   </nav>

//   <div class="lg:hidden" role="dialog" aria-modal="true">
//     <div class="fixed inset-0 z-10"></div>
//     <div class="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-black/90 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
//       <div class="flex items-center justify-between">
//         <a href="#" class="-m-1.5 p-1.5">
//           <span class="sr-only">Fõmi</span>
//         </a>
//         <button type="button" class="-m-2.5 rounded-md p-2.5 text-gray-700">
//           <span class="sr-only">Close menu</span>
//           <svg
//             class="size-6"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke-width="1.5"
//             stroke="currentColor"
//             aria-hidden="true"
//             data-slot="icon"
//           >
//             <path
//               stroke-linecap="round"
//               stroke-linejoin="round"
//               d="M6 18 18 6M6 6l12 12"
//             />
//           </svg>
//         </button>
//       </div>
//       <div class="mt-6 flow-root">
//         <div class="-my-6 divide-y divide-gray-500/10">
//           <div class="space-y-2 py-6">
//             <div class="-mx-3">
//               <button
//                 type="button"
//                 class="flex w-full items-center justify-between rounded-lg py-2 pr-3.5 pl-3 text-base/7 font-semibold text-white hover:bg-gray-50"
//                 aria-controls="disclosure-1"
//                 aria-expanded="false"
//               >
//                 Product
//                 <svg
//                   class="size-5 flex-none"
//                   viewBox="0 0 20 20"
//                   fill="currentColor"
//                   aria-hidden="true"
//                   data-slot="icon"
//                 >
//                   <path
//                     fill-rule="evenodd"
//                     d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
//                     clip-rule="evenodd"
//                   />
//                 </svg>
//               </button>
//             </div>
//             <a
//               href="#"
//               class="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-white hover:bg-gray-50"
//             >
//               Features
//             </a>
//             <a
//               href="#"
//               class="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-white hover:bg-gray-50"
//             >
//               Marketplace
//             </a>
//             <a
//               href="#"
//               class="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-white hover:bg-gray-50"
//             >
//               Company
//             </a>
//           </div>
//           <div class="py-6">
//             <a
//               href="#"
//               class="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-white hover:bg-gray-50"
//             >
//               Log in
//             </a>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
// </header>
// );
import React, { useState } from 'react';
import {
  Row,
  Col,
  Container,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText,
} from 'reactstrap';

function NavbarComponent() {
  const [isOpen, setIsOpen] = useState(true);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar color="secondary" expand="md">
      <Container fluid>
        <Row className="">
          <Col xs="12" className="text-center">
            <NavbarBrand className="text-light" href="/">
              Fõmi
            </NavbarBrand>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col xs="12" className="d-flex justify-content-center">
            <Nav>
              <NavItem>
                <NavLink className="text-light" href="/">
                  sign up
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="text-light" href="">
                  good habits club
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="text-light" href="">
                  about
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="text-light" href="">
                  login
                </NavLink>
              </NavItem>
            </Nav>
          </Col>
        </Row>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;
