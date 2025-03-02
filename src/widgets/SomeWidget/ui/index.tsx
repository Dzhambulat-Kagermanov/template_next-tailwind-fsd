import { TClassName } from '@/shared/types'
import { FC } from 'react'

interface Props extends TClassName {}
const SomeWidget: FC<Props> = ({ className }) => {
	return <></>
}

export { SomeWidget }
