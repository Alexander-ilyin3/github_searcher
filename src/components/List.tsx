import React from "react"

import s from 'styles/List.module.scss'

interface ListProps<T> {
  data: T[],
  renderComponent: (item: T) => React.ReactChild
}

export function List<T>(props: ListProps<T>) {
  return (
    <ul className={s.ul}>
      {props.data.map(gitHubUser => {
        return props.renderComponent(gitHubUser)
      })}
    </ul>
  )
}
