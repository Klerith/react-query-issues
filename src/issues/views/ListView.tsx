import { IssueList } from '../components/IssueList';
import { LabelPicker } from '../components/LabelPicker';


export const ListView = () => {
  return (
    <div className="row mt-5">
      
      <div className="col-8">
        <IssueList />
      </div>
      
      <div className="col-4">
        <LabelPicker />
      </div>
    </div>
  )
}
