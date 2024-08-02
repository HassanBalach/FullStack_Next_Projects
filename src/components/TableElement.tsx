import React from 'react'
import {Button} from './'

const TableElement = () => {
    const td_Style = 'px-6 py-4'
    return (
        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th scope="row" className={`${td_Style} font-medium text-gray-900 whitespace-nowrap dark:text-white`}>
                1
            </th>
            <td className={td_Style}>
                Study
            </td>
            <td className={td_Style}>
                Learning Nextjs
            </td>
            <td className={td_Style}>
               Pending
            </td>
            <td className={`${td_Style} flex gap-2`}>
              <Button btn='Delete'/>
              <Button btn='Done'/>
            </td>
        </tr>
    )
}

export default TableElement
