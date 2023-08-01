<h1>Shopping Cart React App</h1>

<p>This repository contains a simple React application that implements a shopping cart feature. Users can move items into the shopping cart by clicking on the available items. The cart keeps track of the items added to it.</p>

<h2>Table of Contents</h2>

<ul><li><a href="#description" target="_new">Description</a></li><li><a href="#usage" target="_new">Usage</a></li><li><a href="#available-items" target="_new">Available Items</a></li><li><a href="#installation" target="_new">Installation</a></li><li><a href="#contributing" target="_new">Contributing</a></li><li><a href="#license" target="_new">License</a></li></ul>

<h2>Description</h2>
<p>This React application consists of two components:</p>
<ol><li><p><code>ShoppingCart</code>: This component displays a list of available items as buttons. Users can click on an item to add it to the shopping cart. The <code>ShoppingCart</code> component manages the stock of items and the items added to the cart using <code>React.useState</code> hooks.</p></li><li><p><code>Cart</code>: This component displays the items that have been added to the shopping cart. It receives the <code>cartitems</code> prop and renders buttons for each item.</p></li></ol>

<h2>Table of Contents</h2>
<h2>Usage</h2>
<p>To use the shopping cart, simply click on an available item button, and it will be added to the shopping cart. The stock count for that item will be updated accordingly. If an item is out of stock (stock count is 0), it cannot be added to the cart.</p>
<h2>Available Items</h2>
<p>The application comes with a list of available items that can be added to the cart. Each item has a name and a stock count. The initial available items are as follows:</p>
<ul><li>Jacket: 2 in stock</li><li>Pants: 3 in stock</li><li>Scarf: 0 in stock</li><li>Pajamas: 3 in stock</li><li>Shirt: 1 in stock</li></ul>
<h2>Installation</h2>
<p>To run this application locally, follow these steps:</p>
<ol><li><p>Ensure you have <a href="https://nodejs.org" target="_new">Node.js</a> installed on your machine.</p></li><li><p>Clone this repository to your local machine:</p><pre><div class="bg-black rounded-md mb-4"><div class="flex items-center relative text-gray-200 bg-gray-800 px-4 py-2 text-xs font-sans justify-between rounded-t-md"><span>bash</span><button class="flex ml-auto gap-2"><svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect></svg>Copy code</button></div><div class="p-4 overflow-y-auto"><code class="!whitespace-pre hljs language-bash">git <span class="hljs-built_in">clone</span> https://github.com/your-username/your-repository.git
<span class="hljs-built_in">cd</span> your-repository
</code></div></div></pre></li><li><p>Install the dependencies:</p><pre><div class="bg-black rounded-md mb-4"><div class="flex items-center relative text-gray-200 bg-gray-800 px-4 py-2 text-xs font-sans justify-between rounded-t-md"><span>bash</span><button class="flex ml-auto gap-2"><svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect></svg>Copy code</button></div><div class="p-4 overflow-y-auto"><code class="!whitespace-pre hljs language-bash">npm install
</code></div></div></pre></li><li><p>Start the development server:</p><pre><div class="bg-black rounded-md mb-4"><div class="flex items-center relative text-gray-200 bg-gray-800 px-4 py-2 text-xs font-sans justify-between rounded-t-md"><span>bash</span><button class="flex ml-auto gap-2"><svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect></svg>Copy code</button></div><div class="p-4 overflow-y-auto"><code class="!whitespace-pre hljs language-bash">npm start
</code></div></div></pre></li><li><p>Open your web browser and go to <code>http://localhost:3000</code> to see the application.</p></li></ol>
<h2>Contributing</h2>
<p>If you want to contribute to this project, feel free to create a pull request. Your contributions are welcome!</p>
<h2>License</h2>
<p>This project is licensed under the <a href="LICENSE" target="_new">MIT License</a>. Feel free to use and modify this code as per the terms of the license.</p>
