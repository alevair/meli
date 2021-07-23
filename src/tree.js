import { Component } from 'react';

class Tree extends Component {

    render() {
        let items = [];
        
        if(this.props.filters !== undefined) {
            if(this.props.filters.length > 0) {
                if(this.props.filters[0].values.length > 0) {
                    let fil = this.props.filters[0].values[0];
                    if(fil.path_from_root.length > 0) {
                        for(let l1=0; l1<fil.path_from_root.length; l1++) {
                            items.push({
                                id: fil.path_from_root[l1].id,
                                title: fil.path_from_root[l1].name,
                                last: l1 === fil.path_from_root.length - 1
                            })
                        }
                    }
                }
            }    
        }

        const list = items.map((i) => <li key={i.id}><span>{i.title}</span><svg className={i.last ? "hidden" : undefined} viewBox="0 0 9 14" xmlns="http://www.w3.org/2000/svg"><path fill="none" fillRule="evenodd" d="M1 1.343L6.657 7 1 12.657"></path></svg></li>);

        return (
            <div className="tree_cont">
                <ol className="tree colgray">
                    {list}
                </ol>
            </div>
            )
    }
}

export default Tree;