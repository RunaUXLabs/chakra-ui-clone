import { StyleTooltip, StyleText } from './Tooltip.styled';
import Button from '../../form/button/Button';

export type colorSchemeType = 'whiteAlpha' | 'blackAlpha' | 'gray' | 'red' | 'orange' | 'yellow' | 'green' | 'teal' | 'blue' | 'cyan' | 'purple' | 'pink' ;
export type placementType = 'auto-start' | 'auto' | 'auto-end' | 'top-start' | 'top' | 'top-end' | 'right-start' | 'right' | 'right-end' | 'bottom-start' | 'bottom' | 'bottom-end' | 'left-start' | 'left' | 'left-end' ;
export interface TooltipProps {
  colorScheme?: colorSchemeType;
  placement: placementType;
  label: string;
  children: React.ReactNode;
}
const ToolTip = ({ label, placement }: TooltipProps) => {
  return(
  <StyleTooltip label={label} placement={placement}>
    {<Button size={'lg'} colorScheme={'gray'}>Button</Button>}
    {<StyleText>{label}</StyleText>}
  </StyleTooltip>
  )
}
export default ToolTip;
