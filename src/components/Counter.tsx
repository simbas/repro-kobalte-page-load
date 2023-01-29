import { createSignal } from "solid-js";
import "./Counter.css";
import { Button } from "@kobalte/core";

export default function Counter() {
  const [count, setCount] = createSignal(0);
  return (
    <Button.Root class="increment" onClick={() => setCount(count() + 1)}>
      Clicks: {count()}
    </Button.Root>
  );
}
