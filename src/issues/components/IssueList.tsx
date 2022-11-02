import { IssueItem } from './IssueItem';
import { Issue, State } from '../interfaces';
import { FC } from 'react';


interface Props {
    issues: Issue[];
    state?: State;

    onStateChanged: (state?: State) => void;
}

export const IssueList: FC<Props> = ({ issues, state, onStateChanged }) => {

    return (
        <div className="card border-white">
            <div className="card-header bg-dark">
                <ul className="nav nav-pills card-header-pills">
                    <li className="nav-item">
                        <a className={ `nav-link ${ !state ? 'active': '' }` }
                            onClick={ () => onStateChanged() }
                        >All</a>
                    </li>
                    <li className="nav-item">
                        <a className={ `nav-link ${ state === State.Open ? 'active': '' }` }
                            onClick={ () => onStateChanged(State.Open) }
                        >Open</a>
                    </li>
                    <li className="nav-item">
                        <a className={ `nav-link ${ state === State.Closed ? 'active': '' }` }
                            onClick={ () => onStateChanged(State.Closed) }
                        >Closed</a>
                    </li>
                </ul>
            </div>
            <div className="card-body text-dark">
                {
                    issues.map( issue => (
                        <IssueItem key={ issue.id } issue={ issue } />
                    ))
                
                }                
            </div>
        </div>
    )
}
