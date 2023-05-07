import React from 'react'
import logo from "../../assets/logo.png";
import Landing from '../../pages/landing/landing';

export default function Footer() {
  return (
    <div>
      
<footer class="bg-white rounded-lg shadow dark:bg-cl1 pt-4 my-8 mx-12 ">
<div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
    <div class="sm:flex sm:items-center px-8 sm:justify-between">
        <a href={Landing} class="flex items-center mb-4 sm:mb-0">
            <img src={logo} class="h-8 mr-3" alt="Protecto Logo" />
            <span class="self-center text-3xl font-semibold whitespace-nowrap dark:text-white">Protecto</span>
        </a>
        <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
                <a href="#" class="mr-4 hover:underline md:mr-6 ">About</a>
            </li>
            <li>
                <a href="#" class="mr-4 hover:underline md:mr-6">Report</a>
            </li>
            <li>
                <a href="#" class="mr-4 hover:underline md:mr-6 ">Therapy</a>
            </li>
            <li>
                <a href="#" class="hover:underline">Community</a>
            </li>
        </ul>
    </div>
    <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
    <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href={Landing} class="hover:underline">Protecto™</a>. All Rights Reserved.</span>
</div>
</footer>


    </div>
  )
}

