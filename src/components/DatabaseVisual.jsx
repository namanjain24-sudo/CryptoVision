export function DatabaseVisual() {
    return (
      <div className="bg-zinc-900/70 backdrop-blur-sm rounded-xl p-6 grid grid-cols-3 gap-6">
        
        {/* Table 1: assets */}
        <div className="border border-zinc-800/70 rounded-lg p-4 bg-zinc-900/50 backdrop-blur-sm shadow-lg">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-4 h-4 border border-zinc-700 flex items-center justify-center">
              <div className="w-2 h-2 bg-emerald-500"></div>
            </div>
            <span className="text-sm text-zinc-400">assets</span>
          </div>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-xs text-purple-400">asset_id</span>
              <span className="text-xs text-zinc-600">int</span>
            </div>
            <div className="flex justify-between">
              <span className="text-xs text-zinc-500">symbol</span>
              <span className="text-xs text-zinc-600">varchar</span>
            </div>
            <div className="flex justify-between">
              <span className="text-xs text-zinc-500">name</span>
              <span className="text-xs text-zinc-600">varchar</span>
            </div>
            <div className="flex justify-between">
              <span className="text-xs text-zinc-500">price</span>
              <span className="text-xs text-zinc-600">decimal</span>
            </div>
            <div className="flex justify-between">
              <span className="text-xs text-zinc-500">market_cap</span>
              <span className="text-xs text-zinc-600">decimal</span>
            </div>
          </div>
        </div>
  
        {/* Table 2: transactions */}
        <div className="border border-zinc-800/70 rounded-lg p-4 bg-zinc-900/50 backdrop-blur-sm shadow-lg">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-4 h-4 border border-zinc-700 flex items-center justify-center">
              <div className="w-2 h-2 bg-emerald-500"></div>
            </div>
            <span className="text-sm text-zinc-400">transactions</span>
          </div>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-xs text-purple-400">tx_id</span>
              <span className="text-xs text-zinc-600">int</span>
            </div>
            <div className="flex justify-between">
              <span className="text-xs text-zinc-500">user_id</span>
              <span className="text-xs text-zinc-600">int</span>
            </div>
            <div className="flex justify-between">
              <span className="text-xs text-zinc-500">asset_id</span>
              <span className="text-xs text-zinc-600">int</span>
            </div>
            <div className="flex justify-between">
              <span className="text-xs text-zinc-500">amount</span>
              <span className="text-xs text-zinc-600">decimal</span>
            </div>
            <div className="flex justify-between">
              <span className="text-xs text-zinc-500">tx_type</span>
              <span className="text-xs text-zinc-600">varchar</span>
            </div>
            <div className="flex justify-between">
              <span className="text-xs text-zinc-500">timestamp</span>
              <span className="text-xs text-zinc-600">datetime</span>
            </div>
          </div>
        </div>
  
        {/* Table 3: users */}
        <div className="border border-zinc-800/70 rounded-lg p-4 bg-zinc-900/50 backdrop-blur-sm shadow-lg">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-4 h-4 border border-zinc-700 flex items-center justify-center">
              <div className="w-2 h-2 bg-emerald-500"></div>
            </div>
            <span className="text-sm text-zinc-400">users</span>
          </div>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-xs text-purple-400">user_id</span>
              <span className="text-xs text-zinc-600">int</span>
            </div>
            <div className="flex justify-between">
              <span className="text-xs text-zinc-500">username</span>
              <span className="text-xs text-zinc-600">varchar</span>
            </div>
            <div className="flex justify-between">
              <span className="text-xs text-zinc-500">email</span>
              <span className="text-xs text-zinc-600">varchar</span>
            </div>
            <div className="flex justify-between">
              <span className="text-xs text-zinc-500">wallet_address</span>
              <span className="text-xs text-zinc-600">varchar</span>
            </div>
            <div className="flex justify-between">
              <span className="text-xs text-zinc-500">join_date</span>
              <span className="text-xs text-zinc-600">date</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
  