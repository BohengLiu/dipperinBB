export interface SuccessResultIF<T> {
  success: true
  data: T
}

export interface ErrorResultIF<E> {
  success: false
  error: E
}
// interface DEFAULT_ERROR_IF {
//   data: { errors: any }
//   status: number
//   statusText: number
// }

export type ResultIF<T = null, E = null> = SuccessResultIF<T> | ErrorResultIF<E>

export const DefaultResult = {
  success: {
    success:true,
    data: null
  } as SuccessResultIF<null>,
  error: {
    success:false,
    error: null
  } as ErrorResultIF<null>
}