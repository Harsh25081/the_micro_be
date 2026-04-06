"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { TestCard } from "@/components/TestCard";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { TEST_CATEGORIES } from "@/lib/constants";
import { useCart } from "@/lib/cart-context";
import { Search, AlertCircle } from "lucide-react";
import { allTests, Test } from "@/lib/tests";

export default function TestsPage() {
  const router = useRouter();
  const { addItem } = useCart();
  const [tests, setTests] = useState<Test[]>([]);
  const [filteredTests, setFilteredTests] = useState<Test[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  useEffect(() => {
    const fetchTests = async () => {
      try {
        setLoading(true);
        // const response = await fetch('/api/tests');
        // if (!response.ok) {
        //   throw new Error('Failed to fetch tests');
        // }
        // const data = await response.json();
        // setTests(data.tests || []);
        // setFilteredTests(data.tests || []);

        setTests(allTests || []);
        setFilteredTests(tests || []);
      } catch (err) {
        setError("Failed to load tests. Please try again later.");
        console.error("[v0] Error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchTests();
  }, []);

  // Filter tests based on search and category
  useEffect(() => {
    let filtered = tests;

    if (searchQuery) {
      filtered = filtered.filter(
        (test) =>
          test.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          test.description.toLowerCase().includes(searchQuery.toLowerCase()),
      );
    }

    if (selectedCategory) {
      filtered = filtered.filter((test) => test.category === selectedCategory);
    }

    setFilteredTests(filtered);
  }, [searchQuery, selectedCategory, tests]);

  const handleAddToCart = (testId: string) => {
    const test = tests.find((t) => t.id === testId);
    if (test) {
      addItem({
        id: test.id,
        type: "test",
        name: test.name,
        price: test.price,
      });
      // Show toast or notification
    }
  };

  const handleViewDetails = (testId: string) => {
    router.push(`/tests/${testId}`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <section className="bg-white border-b py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Health Tests
          </h1>
          <p className="text-gray-600">
            Choose from our wide range of health tests with home collection
            available
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar - Filters */}
          <div className="lg:col-span-1">
            <Card className="p-6 sticky top-20">
              <h2 className="text-lg font-semibold mb-4 text-gray-900">
                Filters
              </h2>

              {/* Search */}
              <div className="mb-6">
                <div className="relative">
                  <Search
                    className="absolute left-3 top-3 text-gray-400"
                    size={18}
                  />
                  <Input
                    type="text"
                    placeholder="Search tests..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>

              {/* Categories */}
              <div>
                <h3 className="font-medium text-gray-900 mb-3">Category</h3>
                <div className="space-y-2">
                  <button
                    onClick={() => setSelectedCategory("")}
                    className={`block w-full text-left px-3 py-2 rounded transition ${
                      selectedCategory === ""
                        ? "bg-teal-100 text-teal-700 font-medium"
                        : "text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    All Tests
                  </button>
                  {TEST_CATEGORIES.map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`block w-full text-left px-3 py-2 rounded transition ${
                        selectedCategory === category
                          ? "bg-teal-100 text-teal-700 font-medium"
                          : "text-gray-700 hover:bg-gray-100"
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {error && (
              <Card className="p-4 mb-6 bg-red-50 border-red-200">
                <div className="flex gap-3">
                  <AlertCircle
                    className="text-red-600 flex-shrink-0"
                    size={20}
                  />
                  <p className="text-sm text-red-600">{error}</p>
                </div>
              </Card>
            )}

            {loading ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[...Array(6)].map((_, i) => (
                  <Card key={i} className="p-6 animate-pulse">
                    <div className="h-6 bg-gray-200 rounded mb-4"></div>
                    <div className="h-4 bg-gray-200 rounded mb-4"></div>
                    <div className="h-8 bg-gray-200 rounded mb-4"></div>
                    <div className="h-10 bg-gray-200 rounded"></div>
                  </Card>
                ))}
              </div>
            ) : filteredTests.length === 0 ? (
              <Card className="p-12 text-center">
                <p className="text-gray-600">
                  No tests found matching your criteria.
                </p>
              </Card>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredTests.map((test) => (
                  <TestCard
                    key={test.id}
                    {...test}
                    onAddToCart={handleAddToCart}
                    onViewDetails={handleViewDetails}
                  />
                ))}
              </div>
            )}

            {/* Results count */}
            {!loading && (
              <p className="text-sm text-gray-600 mt-6">
                Showing {filteredTests.length} of {tests.length} tests
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
