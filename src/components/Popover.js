// // import React from 'react'

// // import { useState } from 'react'

// // const Popover = () => {
// //   return (
// //     <div>

// // <button data-popover-target="popover-default" type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Default popover</button>
// // <div data-popover id="popover-default" role="tooltip" className="absolute z-10 invisible inline-block w-64 text-sm text-gray-500 transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-sm opacity-0 dark:text-gray-400 dark:border-gray-600 dark:bg-gray-800">
// //     <div className="px-3 py-2 bg-gray-100 border-b border-gray-200 rounded-t-lg dark:border-gray-600 dark:bg-gray-700">
// //         <h3 className="font-semibold text-gray-900 dark:text-white">Popover title</h3>
// //     </div>
// //     <div className="px-3 py-2">
// //         <p>And here's some amazing content. It's very engaging. Right?</p>
// //     </div>
// //     <div data-popper-arrow></div>
// // </div>

// //     </div>
// //   )
// // }

// // export default Popover

// import * as React from 'react';
// import Popover from '@mui/material/Popover';
// import Typography from '@mui/material/Typography';

// export default function MouseOverPopover() {
//   const [anchorEl, setAnchorEl] = React.useState(null);

//   const handlePopoverOpen = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handlePopoverClose = () => {
//     setAnchorEl(null);
//   };

//   const open = Boolean(anchorEl);

//   return (
//     <div>
//       <Typography
//         aria-owns={open ? 'mouse-over-popover' : undefined}
//         aria-haspopup="true"
//         onMouseEnter={handlePopoverOpen}
//         onMouseLeave={handlePopoverClose}
//       >
//         Hover with a Popover.
//       </Typography>
//       <Popover
//         id="mouse-over-popover"
//         sx={{
//           pointerEvents: 'none',
//         }}
//         open={open}
//         anchorEl={anchorEl}
//         anchorOrigin={{
//           vertical: 'bottom',
//           horizontal: 'left',
//         }}
//         transformOrigin={{
//           vertical: 'top',
//           horizontal: 'left',
//         }}
//         onClose={handlePopoverClose}
//         disableRestoreFocus
//       >
//         <Typography sx={{ p: 1 }}>I use Popover.</Typography>
//       </Popover>
//     </div>
//   );
// }

const Popover = () => {
  return (
    <div
      className="list-none bg-slate-800 w-[1153px] h-[575px] rounded-xl absolute "
    > 
    <div>
      
    </div>
      <h1 className="text-2xl font-bold p-4">Quick Actions</h1> 
  <div className="flex flex-wrap ">
  <li className="w-80 m-8">Talk to chat assistant</li>
      <li className="w-80 m-8">View care profiles</li>
      <li className="w-80  m-8">Create a new document</li>
      <li className="w-80 m-8"> Ask about a document</li>
      <li className="w-80 m-8">Create training </li>
      <li className="w-80 m-8">View staff profiles</li>
      <li className="w-80 m-8">Create a report</li>
      <li className="w-80 m-8">Check updates</li>
      <li className="w-80 m-8">View business analysis</li>
      <li className="w-80 m-8">View folders</li>
      <li className="w-80 m-8">Access training</li>
      <li className="w-80 m-8">mediation diary</li>
      <li className="w-80 m-8">Write an email</li>
      <li className="w-80 m-8">Create an analysis</li>
  </div>
    </div>
  );
};

export default Popover;
