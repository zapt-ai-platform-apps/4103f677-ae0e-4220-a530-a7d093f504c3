import { createSignal, Show, For } from 'solid-js';
import { createEvent } from './supabaseClient';

function App() {
  const [gender, setGender] = createSignal('');
  const [origin, setOrigin] = createSignal('');
  const [meaning, setMeaning] = createSignal('');
  const [loading, setLoading] = createSignal(false);
  const [names, setNames] = createSignal([]);

  const handleGenerateNames = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const prompt = `Suggest 10 baby names ${
        gender() ? 'for a ' + gender() + ' child ' : ''
      }${
        origin() ? ' of ' + origin() + ' origin ' : ''
      }${
        meaning() ? ' that mean ' + meaning() : ''
      }. Return the names as a JSON array in the following format: { "names": ["name1", "name2", ..., "name10"] }`;

      const result = await createEvent('chatgpt_request', {
        prompt: prompt,
        response_type: 'json',
      });

      setNames(result.names || []);
    } catch (error) {
      console.error('Error generating names:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div class="min-h-screen bg-gradient-to-br from-purple-100 to-blue-100 p-4">
      <div class="max-w-3xl mx-auto">
        <h1 class="text-4xl font-bold text-purple-600 mb-8 text-center">New Born Name Finder</h1>
        <form onSubmit={handleGenerateNames} class="bg-white p-6 rounded-lg shadow-md space-y-4">
          <div>
            <label class="block text-gray-700 font-semibold mb-2">Gender</label>
            <select
              class="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-400 focus:border-transparent box-border cursor-pointer"
              value={gender()}
              onInput={(e) => setGender(e.target.value)}
            >
              <option value="">Any</option>
              <option value="boy">Boy</option>
              <option value="girl">Girl</option>
            </select>
          </div>
          <div>
            <label class="block text-gray-700 font-semibold mb-2">Origin</label>
            <input
              type="text"
              placeholder="e.g., Hebrew, Latin, etc."
              class="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-400 focus:border-transparent box-border"
              value={origin()}
              onInput={(e) => setOrigin(e.target.value)}
            />
          </div>
          <div>
            <label class="block text-gray-700 font-semibold mb-2">Meaning</label>
            <input
              type="text"
              placeholder="e.g., strong, happiness, etc."
              class="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-400 focus:border-transparent box-border"
              value={meaning()}
              onInput={(e) => setMeaning(e.target.value)}
            />
          </div>
          <button
            type="submit"
            class={`w-full py-3 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer ${
              loading() ? 'opacity-50 cursor-not-allowed' : ''
            }`}
            disabled={loading()}
          >
            <Show when={!loading()} fallback={<span>Generating...</span>}>
              Generate Names
            </Show>
          </button>
        </form>
        <Show when={names().length > 0}>
          <div class="mt-8 bg-white p-6 rounded-lg shadow-md">
            <h2 class="text-2xl font-bold text-purple-600 mb-4">Name Suggestions</h2>
            <ul class="list-disc pl-6 space-y-2">
              <For each={names()}>
                {(name) => (
                  <li class="text-gray-700">{name}</li>
                )}
              </For>
            </ul>
          </div>
        </Show>
      </div>
    </div>
  );
}

export default App;