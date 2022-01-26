import React, { Component, Fragment } from "react";
import { combineLatest, Observable, Subscription } from "rxjs";

export type AsyncProps<T extends any[]> = {
  select: { [K in keyof T]: Observable<T[K]> };
  children: (result?: any[]) => JSX.Element;
};
export type AsyncState = { result?: any[] };

export default class Async<T extends any[]> extends Component<
  AsyncProps<T>,
  AsyncState
> {
  private subscription!: Subscription;

  constructor(props: AsyncProps<T>) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.subscription = combineLatest(this.props.select).subscribe((result) =>
      this.setState({ result: result as T })
    );
  }

  componentWillUnmount() {
    this.subscription.unsubscribe();
  }

  render() {
    return <Fragment>{this.props.children(this.state.result)}</Fragment>;
  }
}
