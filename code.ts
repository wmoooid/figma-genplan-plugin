figma.showUI(__html__);

figma.ui.onmessage = (msg) => {
  if (msg.type === 'start-number') {
    let count = Number(msg.count);

    figma.on('selectionchange', async () => {
      const selection: SceneNode = figma.currentPage.selection[0];
      const text = figma.createText();
      await figma.loadFontAsync({ family: 'Inter', style: 'Regular' });
      text.characters = `${count}`;
      text.x = selection.x + (selection.width / 2 - text.width / 2);
      text.y = selection.y + (selection.height / 2 - text.height / 2);
      figma.currentPage.appendChild(text);
      selection.name = `${count}`;
      ++count;
      console.log(count);
    });
  }
};
