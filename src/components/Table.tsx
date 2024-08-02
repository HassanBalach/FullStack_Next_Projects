import React from 'react'
import {TableElement} from './'

const Table = () => {
    const th_style = 'px-6 py-3'
  return (
   

<div className="relative overflow-x-auto w-[70%] mx-auto mt-10">
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className={th_style}>
                    ID
                </th>
                <th scope="col" className={th_style}>
                    TITLE
                </th>
                <th scope="col" className={th_style}>
                    DESCRIPTION
                </th>
                <th scope="col" className={th_style}>
                    STATUS
                </th>
                <th scope="col" className={th_style}>
                    ACTION
                </th>
            </tr>
        </thead>
        <tbody>
         <TableElement />
        </tbody>
    </table>
</div>

  )
}

export default Table
