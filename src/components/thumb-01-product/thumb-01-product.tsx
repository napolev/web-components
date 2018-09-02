import { Component, Element, Prop, Event, EventEmitter, State, Method } from '@stencil/core';

@Component({
	tag: 'thumb-01-product',
	styleUrl: 'thumb-01-product.scss',
	shadow: true
})
export class MyComponent {
	@Element() el!: HTMLStencilElement;

	@Prop() thumb: string;
	@Prop() name: string;
	@Prop() buttonText: string;

	@Event() buttonClicked: EventEmitter;

	@State() scale: number = 0;

	render() {
		return [
			<div>
				<div class="thumb" style={{ "background-image": "url(" + this.thumb + ")" }}>
					<a href="#" class="magnifying-glass fa fa-search-plus" onClick={ (e) => this.togglePopup(e) }></a>
				</div>
				<span class="name">{this.name}</span><br />
				<a class="button" href="#" onClick={ (e) => this.emitbuttonClicked(e) }>{this.buttonText}</a>
			</div>
			,
			<div class="popup" style={{
				"-ms-transform": "translate(-50%, -50%) scale("+this.scale+")",
				"-webkit-transform": "translate(-50%, -50%) scale("+this.scale+")",
				"transform": "translate(-50%, -50%) scale("+this.scale+")",
				"background-image": "url(" + this.thumb + ")"
			}}>
				<a href="#" class="close fa fa-times" onClick={ (e) => this.togglePopup(e) }></a>
			</div>,
			<div
				class="overlay"
				style={{
					"display": (this.scale == 1)? "block": "none",
				}}
				onClick={ (e) => this.togglePopup(e) }
			></div>
		];
	}

	@Method()
	togglePopup(e) {
		this.scale = (this.scale == 0)? 1: 0;
		e.preventDefault();
	}

	emitbuttonClicked(e) {
		this.buttonClicked.emit({
			name: this.name,
		});
		e.preventDefault();
	}

}
