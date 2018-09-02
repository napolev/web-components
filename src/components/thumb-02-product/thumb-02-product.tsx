import { Component, Element, Prop } from '@stencil/core';

@Component({
	tag: 'thumb-02-product',
	styleUrl: 'thumb-02-product.scss',
	shadow: true
})
export class MyComponent {
	@Element() el!: HTMLStencilElement;

	@Prop() thumb: string;
	@Prop() description: string;
	@Prop() buttonText: string;
	@Prop() url: string;
	@Prop() target: string = '_self';

	render() {
		return [
			<div>
				<div class="thumb" style={{ "background-image": "url(" + this.thumb + ")" }}></div>
				<div class="description">{this.description}</div>
				<div>
					<a href={this.url} class="button" target={this.target}>{this.buttonText}</a>
				</div>
			</div>
		];
	}

}
