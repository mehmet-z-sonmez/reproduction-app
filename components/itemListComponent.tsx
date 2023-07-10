// 'use client'
import React from 'react'

// If this component is used by a layout the item_list is duplicated in html source of the app (as not expected)
//If this component is used by a page instead of layout the item_list is not duplicated (as expected)
export default async function ItemListComponent() {
  const item_list = await createItems()

  return (
    <div>
      <h1>Item List Component</h1>
      <ul>
        {item_list.map((item, index) => {
          return <li key={index}>{item}</li>
        })}
      </ul>
    </div>
  )
}

const createItems = async () => {
  let item_list = []

  for (let i = 1; i <= 100; i++) {
    item_list.push('Item' + i)
  }

  return item_list
}
