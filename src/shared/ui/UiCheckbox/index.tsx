'use client'
import { FC, InputHTMLAttributes } from 'react'
import { cn } from '@/shared/lib'
import { UiTypography } from '../UiTypography'

const wrapperCls = (isDisabled?: boolean) =>
	`flex gap-x-2.25 items-center ${
		isDisabled ? 'cursor-not-allowed' : 'cursor-pointer'
	}`
const labelCls = (isDisabled?: boolean) =>
	`${isDisabled ? 'text-[#9a8f8f]' : 'text-black'}`
const inpCls = `cursor-pointer border-[solid] border-[1px] disabled:border-[#9a8f8f] border-black rounded-[4px] size-5 flex items-center justify-between before:w-[calc(100%-2px)] before:h-[calc(100%-2px)] before:block before:bg-[url(/images/shared/checkMark.svg)] before:bg-contain before:bg-center before:bg-no-repeat before:transition-[120ms_transform_ease-in-out] before:origin-bottom-left before:scale-0 checked:before:scale-100`

interface TUiCheckboxProps
	extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
	label?: string
	inpClassName?: string
}
const UiCheckbox: FC<TUiCheckboxProps> = ({
	className,
	label,
	checked,
	inpClassName,
	disabled,
	...other
}) => {
	return (
		<label className={cn([wrapperCls(disabled), className])}>
			<input
				style={{
					WebkitAppearance: 'none',
					appearance: 'none',
				}}
				checked={checked}
				type='checkbox'
				className={cn([inpCls, inpClassName])}
				disabled={disabled}
				{...other}
			/>
			{label && (
				<UiTypography
					tag='p'
					font='Montserrat-R'
					size={16}
					className={labelCls(disabled)}
				>
					{label}
				</UiTypography>
			)}
		</label>
	)
}

export { UiCheckbox, type TUiCheckboxProps }
