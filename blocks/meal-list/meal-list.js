import { render as myRenderer } from '../../scripts/__dropins__/demo-dropin/render.js';
import { DropinContainer } from '../../scripts/__dropins__/demo-dropin/containers/DropinContainer.js';

export default async function decorate(block) {
  console.log('meal-list render');
  block.innerHTML = '';
  await myRenderer.render(DropinContainer, {})(block);
  console.log('meal-list render completed');
}