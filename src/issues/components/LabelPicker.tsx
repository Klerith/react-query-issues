import { FC } from 'react';
import { useLabels } from '../hooks/useLabels';
import { LoadingIcon } from '../../shared/components/LoadingIcon';


interface Props {
  selectedLabels: string[];
  onChange: ( labelName: string) => void;
}



export const LabelPicker: FC<Props> = ({ selectedLabels, onChange }) => {

  const labelsQuery = useLabels();

  if ( labelsQuery.isLoading ) //! por qué isLoading y no isFetching
    return ( <LoadingIcon /> );


  return (
    <>
      {
        labelsQuery.data?.map( label => (
          <span 
              key={ label.id }
              className={`badge rounded-pill m-1 label-picker ${ selectedLabels.includes(label.name) ? 'label-active': '' }`}
              style={{ border: `1px solid #${ label.color }`, color: `#${ label.color }` }}
              onClick={ () => onChange( label.name ) }
          >
              { label.name }
          </span>
        ))
      }
    </>
  )
}
