import { useState } from 'react';

export default function useActiveTab(initialTab = '/') {
  const [activeTab, setActiveTab] = useState(initialTab);
  return { activeTab, setActiveTab };
}
