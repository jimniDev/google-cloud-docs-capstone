export function Footer() {
  return (
    <footer className="mt-20 bg-[#f8f9fa] text-sm text-[#3c4043]">
      <div className="mx-auto max-w-[1600px] px-6 py-12">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 xl:grid-cols-4">
          <div>
            <h3 className="mb-4 text-[14px] font-semibold text-[#202124]">Products and pricing</h3>
            <ul className="space-y-2.5 text-[13px]">
              <li><a href="#" className="hover:text-[#1a73e8]">See all products</a></li>
              <li><a href="#" className="hover:text-[#1a73e8]">Google Cloud pricing</a></li>
              <li><a href="#" className="hover:text-[#1a73e8]">Google Cloud Marketplace</a></li>
              <li><a href="#" className="hover:text-[#1a73e8]">Contact sales</a></li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-[14px] font-semibold text-[#202124]">Support</h3>
            <ul className="space-y-2.5 text-[13px]">
              <li><a href="#" className="hover:text-[#1a73e8]">Community forums</a></li>
              <li><a href="#" className="hover:text-[#1a73e8]">Support</a></li>
              <li><a href="#" className="hover:text-[#1a73e8]">Release Notes</a></li>
              <li><a href="#" className="hover:text-[#1a73e8]">System status</a></li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-[14px] font-semibold text-[#202124]">Resources</h3>
            <ul className="space-y-2.5 text-[13px]">
              <li><a href="#" className="hover:text-[#1a73e8]">GitHub</a></li>
              <li><a href="#" className="hover:text-[#1a73e8]">Getting Started with Google Cloud</a></li>
              <li><a href="#" className="hover:text-[#1a73e8]">Code samples</a></li>
              <li><a href="#" className="hover:text-[#1a73e8]">Cloud Architecture Center</a></li>
              <li><a href="#" className="hover:text-[#1a73e8]">Training and Certification</a></li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-[14px] font-semibold text-[#202124]">Engage</h3>
            <ul className="space-y-2.5 text-[13px]">
              <li><a href="#" className="hover:text-[#1a73e8]">Blog</a></li>
              <li><a href="#" className="hover:text-[#1a73e8]">Events</a></li>
              <li><a href="#" className="hover:text-[#1a73e8]">X (Twitter)</a></li>
              <li><a href="#" className="hover:text-[#1a73e8]">Google Cloud on YouTube</a></li>
              <li><a href="#" className="hover:text-[#1a73e8]">Google Cloud Tech on YouTube</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6">
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-[12px] text-[#5f6368]">
            <a href="#" className="hover:text-[#1a73e8]">About Google</a>
            <a href="#" className="hover:text-[#1a73e8]">Privacy</a>
            <a href="#" className="hover:text-[#1a73e8]">Site terms</a>
            <a href="#" className="hover:text-[#1a73e8]">Google Cloud terms</a>
            <a href="#" className="hover:text-[#1a73e8]">Manage cookies</a>
          </div>
          <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-2 text-[12px] text-[#5f6368]">
            <span>English</span>
            <span>Deutsch</span>
            <span>Espanol</span>
            <span>Francais</span>
            <span>Portugues</span>
            <span>Japanese</span>
            <span>Korean</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
