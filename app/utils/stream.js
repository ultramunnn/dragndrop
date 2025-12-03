export function nodeToWebStream(nodeStream) {
  return new ReadableStream({
    async pull(controller) {
      for await (const chunk of nodeStream) {
        const text = chunk.choices?.[0]?.delta?.content || "";
        controller.enqueue(new TextEncoder().encode(text));
      }
      controller.close();
    }
  });
}