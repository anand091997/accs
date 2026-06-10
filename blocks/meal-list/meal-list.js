import { render as myRenderer } from '../../scripts/__dropins__/demo-dropin/render.js';
import { DropinContainer } from '../../scripts/__dropins__/demo-dropin/containers/DropinContainer.js';

export default async function decorate(block) {
  block.innerHTML = '';
  await myRenderer.render(DropinContainer, {})(block);
}