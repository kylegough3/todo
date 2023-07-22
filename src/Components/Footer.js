import React from 'react'

export default function Footer() {
  return (
    <footer className="text-center text-white bg-info p-4" id='footer'>
        &copy; {new Date().getFullYear()} Kyle Gough, All Rights Reserved.
    </footer>
  )
}
