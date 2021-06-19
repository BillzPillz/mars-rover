export interface ICoordinates {
  x: number
  y: number
}
export interface IGridItem extends ICoordinates {
  id: string
  direction: number
}
