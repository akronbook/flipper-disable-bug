import { FASTElement, customElement, attr, html } from '@microsoft/fast-element';

const template = html<DemoControl>`
<fast-flipper direction="previous" ?disabled=${x => x.firstPage == false} @click=${(x)=>x.pageNumber++}>
</fast-flipper>
<p>Page number=${(x)=>x.pageNumber}</p>
`;

@customElement({
  name: 'demo-control',
  template
})
export class DemoControl extends FASTElement {
    @attr()
    firstPage: boolean = false;

    @attr()
    pageNumber: number = 0;
}