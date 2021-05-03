import React from 'react'
import { Grid } from 'components'

export const columns = [
  {
    key: 'id',
    name: 'ID',
    width: '40px',
    type: Grid.Types.NUMBER
  },
  {
    key: 'date',
    name: 'Дата',
    flexWidth: 2.5,
    type: Grid.Types.DATE
  },
  {
    key: 'status',
    name: 'Статус',
    flexWidth: 2,
    type: Grid.Types.SELECT,
    formatter: Grid.Formatters.StatusFormatter
  },
  {
    key: 'count',
    name: 'Позиций',
    flexWidth: 1,
    type: Grid.Types.NUMBER
  },
  {
    key: 'name',
    name: 'Наименование',
    flexWidth: 4,
    type: Grid.Types.STRING
  },
  {
    key: 'cost',
    name: 'Стоимость',
    flexWidth: 2,
    type: Grid.Types.NUMBER
  },
  {
    key: 'currency',
    name: 'Валюта',
    flexWidth: 1.5,
    type: Grid.Types.DICTIONARY,
    viewField: 'isoCode'
  }
]