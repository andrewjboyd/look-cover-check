import * as React from 'react';

export interface IActionButtonProps {
    Test: string;
    onClick: (id: string) => void;
}

export default class WordList extends React.Component<IActionButtonProps, {}> {
    constructor(props: IActionButtonProps) {
        super(props);

        this.onClick = this.onClick.bind(this);
    }

    public render() {
        return <span className="far fa-trash-alt hover" onClick={this.onClick} />
    }

    private onClick(target: React.MouseEvent<HTMLElement>)
    {
        this.props.onClick(this.props.Test);
    }
}